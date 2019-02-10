new Vue({
  el: "#app",
  data() {
    return {
      title: "PutLetter",
      isActive: "",
      //   COLUMN 1
      inputs1: [
        {
          position: "1",
          value: ""
        },
        {
          position: "12",
          value: ""
        },
        {
          position: "13",
          value: ""
        },
        {
          position: "14",
          value: ""
        },
        {
          position: "15",
          value: ""
        }
      ],
      //   COLUMN 2
      inputs2: [
        {
          position: "21",
          value: ""
        },
        {
          position: "22",
          value: ""
        },
        {
          position: "23",
          value: ""
        },
        {
          position: "24",
          value: ""
        },
        {
          position: "25",
          value: ""
        }
      ],
      //   COLUMN 3
      inputs3: [
        {
          position: "31",
          value: ""
        },
        {
          position: "32",
          value: ""
        },
        {
          position: "33",
          value: ""
        },
        {
          position: "34",
          value: ""
        },
        {
          position: "35",
          value: ""
        }
      ],
      //   COLUMN 4
      inputs4: [
        {
          position: "41",
          value: ""
        },
        {
          position: "42",
          value: ""
        },
        {
          position: "43",
          value: ""
        },
        {
          position: "44",
          value: ""
        },
        {
          position: "45",
          value: ""
        }
      ],
      //   COLUMN 5
      inputs5: [
        {
          position: "51",
          value: ""
        },
        {
          position: "52",
          value: ""
        },
        {
          position: "53",
          value: ""
        },
        {
          position: "54",
          value: ""
        },
        {
          position: "55",
          value: ""
        }
      ]
    };
  },
  methods: {
    onClick: function() {
      this.clicks++;
      if (this.clicks === 1) {
        console.log("single");
        this.isActive = true;
      } else {
        console.log("clear");
        this.isActive = false;
        this.clicks = 0;
      }
    }
  }
});
