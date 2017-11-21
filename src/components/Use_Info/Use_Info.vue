<template>
    <div class="Use_info">
        <my-header></my-header>
        <my-modules :DiskProphetOverviewTable="DiskProphetOverviewTable" :HostSummaryUptimeWeek="HostSummaryUptimeWeek" :SystemCpu="SystemCpu" :SystemMemoryUsage="SystemMemoryUsage"></my-modules>
    </div>
</template>

<script>
    import header from "../header/header.vue";
    import someModule from "../someModule/someModule.vue";
    import axios from 'axios';
    export default {
        data() {
            return {
                DiskProphetOverviewTable: {},
                HostSummaryUptimeWeek: {},
                SystemCpu: {},
                SystemMemoryUsage: {}
            };
        },
        components: {
            "my-header": header,
            "my-modules": someModule
        },
        created() {
            axios.get(`/proxy/1/query?db=telegraf&q=SELECT disk_name as %22Name%22, life_expectancy as %22Remaining Day Forecast%22, near_failure as %22Near-Failure Prediction%22, disk_serial_number AS %22Serial Number%22, disk_vendor as %22Disk Vendor%22, disk_type as %22Disk Type%22, disk_model as %22Disk Model%22, max(predicted) as %22Predicted%22 FROM autogen.sai_disk_prediction WHERE host_domain_id =~ /^(daowoo-idc-10)/ GROUP BY disk_serial_number&epoch=ms`).then((response) => {
                this.DiskProphetOverviewTable = response.data.results[0]
            });
            axios.get(`/proxy/1/query?db=telegraf&q=SELECT last("uptime") AS "value" FROM "system" WHERE "host" =~ /^(daowoo-idc-10)/`).then((response) => {
                this.HostSummaryUptimeWeek = response.data.results[0].series[0].values[0]
            });
            axios.get(`/proxy/1/query?db=telegraf&q=SELECT mean(usage_idle) as "idle", mean(usage_user) as "user", mean(usage_system) as "system", mean(usage_softirq) as "softirq", mean(usage_steal) as "steal", mean(usage_nice) as "nice", mean(usage_irq) as "irq", mean(usage_iowait) as "iowait", mean(usage_guest) as "guest", mean(usage_guest_nice) as "guest_nice"  FROM "cpu" WHERE "host" =~ /^(daowoo-idc-10)/ and  cpu = 'cpu-total'`).then((response) => {
                this.SystemCpu = response.data.results[0].series[0]
            });
            axios.get(`/proxy/1/query?db=telegraf&q=SELECT mean(total) as total, mean(used) as used, mean(cached) as cached, mean(free) as free, mean(buffered) as buffered  FROM "mem" WHERE host =~ /.$/ AND time > now() - 30d GROUP BY time(6h), host ORDER BY asc&epoch=ms`).then((response) => {
                this.SystemMemoryUsage = response.data.results[0].series[0]
            });
        },
    };
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
