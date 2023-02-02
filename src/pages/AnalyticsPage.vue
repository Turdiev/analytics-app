<template>
  <v-app>
    <div class="flex justify-center items-center max-h-10 mt-28">
      <AppTitle>Аналитика</AppTitle>
    </div>

    <div class="md:px-12 sm:px-4 mx-2 py-20">
      <h5
        class="font-medium leading-tight text-xl mt-0 mb-6 text-gray-600 ml-6"
      >
        Аналитика по визитам:
      </h5>
      <div class="amchart" ref="amchart"></div>
    </div>
  </v-app>
</template>

<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import AppTitle from "@/components/app/AppTitle.vue";
export default {
  name: "AnalyticsPage",

  components: {
    AppTitle,
  },

  data() {
    return {
      data: null,
    };
  },

  computed: {
    getChartData() {
      return this.$store.state.chartData;
    },

    getSiteID() {
      return this.$store.state.siteID;
    },
  },

  created() {
    if (this.getSiteID === "") {
      this.$router.push("/");
    }
  },

  mounted() {
    let root = am5.Root.new(this.$refs.amchart);
    let colorSet = am5.ColorSet.new(root, {});

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    this.data = this.getChartData.map((data, index) => {
      if (index === 0) {
        data.strokeSettings = {
          // Цвет линии
          stroke: colorSet.getIndex(4),
        };
        data.fillSettings = {
          // Цвет графика
          fill: colorSet.getIndex(5),
        };
        data.bulletSettings = {
          // Цвет точки
          fill: colorSet.getIndex(4),
        };
      } else {
        data.bulletSettings = {
          fill: colorSet.getIndex(4),
        };
      }

      return data;
    });

    this.createChart(root);
  },

  beforeDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  },

  methods: {
    createChart(root) {
      // Create chart
      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: true,
          panY: true,
          wheelX: "panX",
          wheelY: "zoomX",
          layout: root.verticalLayout,
          pinchZoomX: true,
        })
      );

      this.addCursor(root, chart);
      this.createAxis(root, chart);

      // Add scrollbar
      chart.set(
        "scrollbarX",
        am5.Scrollbar.new(root, {
          orientation: "horizontal",
          marginBottom: 20,
        })
      );

      // Make stuff animate on load
      chart.appear(1000, 100);
    },

    addCursor(root, chart) {
      let cursor = chart.set(
        "cursor",
        am5xy.XYCursor.new(root, {
          behavior: "none",
        })
      );
      cursor.lineY.set("visible", false);
    },

    createAxis(root, chart) {
      // Создание осей
      let xRenderer = am5xy.AxisRendererX.new(root, {});
      xRenderer.grid.template.set("location", 0.5);
      xRenderer.labels.template.setAll({
        location: 0.5,
        multiLocation: 0.5,
      });

      let xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          categoryField: "date",
          renderer: xRenderer,
          tooltip: am5.Tooltip.new(root, {}),
        })
      );

      xAxis.data.setAll(this.data);

      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          maxPrecision: 0,
          renderer: am5xy.AxisRendererY.new(root, {}),
        })
      );

      this.createSerias(root, chart, xAxis, yAxis);
    },

    createSerias(root, chart, xAxis, yAxis) {
      let series = chart.series.push(
        am5xy.LineSeries.new(root, {
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "visits",
          categoryXField: "date",
          tooltip: am5.Tooltip.new(root, {
            labelText: "{valueY}",
            dy: -5,
          }),
        })
      );

      series.strokes.template.setAll({
        templateField: "strokeSettings",
        strokeWidth: 2,
      });

      series.fills.template.setAll({
        visible: true,
        fillOpacity: 0.5,
        templateField: "fillSettings",
      });

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            templateField: "bulletSettings",
            radius: 5,
          }),
        });
      });

      series.data.setAll(this.data);
      series.appear(1000);
    },
  },
};
</script>

<style lang="scss">
.amchart {
  width: 100%;
  height: 500px;
}
</style>