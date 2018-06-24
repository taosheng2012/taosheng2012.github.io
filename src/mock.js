import mock from "mockjs";

mock.mock("getChartData", {
    "dataSource|30-40": [{
        "key|+1": 0, 
        name: "@name",
        age: "@integer(20,50)",
        "gender|1": ["Male", "Female"],
        "education|1": ["本一", "本二", "本三", "大专", "中专", "高中及以下"]
    }]
});
