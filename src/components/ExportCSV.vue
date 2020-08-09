<template>
  <div class="export-to-csv">
    <button class="btn-main" v-on:click="csvExport(data)">
      Export to CSV
    </button>
  </div>
</template>

<script>
export default {
  name: "ExportCSV",
  props: ["exportData"],
  data() {
    return {
      data: this.exportData
    };
  },
  methods: {
    csvExport(exportData) {
      const formattedData = exportData;
      let csvContent = "data:text/csv;charset=utf-8,";
      csvContent += [
        Object.keys(formattedData[0]).join(";"),
        ...formattedData.map(item => Object.values(item).join(";"))
      ]
        .join("\n")
        .replace(/(^\[)|(\]$)/gm, "");

      const data = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", data);
      link.setAttribute("download", "export.csv");
      link.click();
    }
  }
};
</script>
