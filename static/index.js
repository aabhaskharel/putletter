// const wrds = require("./data.json");

new Vue({
  el: "#app",
  data() {
    return {
      title: "PutLetter",
      message: "",
      startToggle: true,
      isActive: "",
      currentPlayer: 1,

      player1Score: 0,
      player2Score: 0,

      toCheck: "",
      allWords: {},

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
    onClick: function(value) {
      this.message = "";
      this.clicks++;
      if (this.clicks === 1 && value.length > 0) {
        console.log(value);
        // this.isActive = true;
        this.toCheck += value;
      } else {
        // this.isActive = false;
        this.clicks = 0;
      }
    },

    changePlayer: function() {
      this.message = "";
      this.currentPlayer == 1
        ? (this.currentPlayer += 1)
        : (this.currentPlayer -= 1);
    },

    checkWord: function() {
      if (this.toCheck.length > 0) {
        if (this.allWords[this.toCheck]) {
          this.currentPlayer == 1
            ? (this.player1Score += 1)
            : (this.player2Score += 1);
          this.message = "Correct!";
        } else {
          this.message = "Nope :(";
        }
        this.currentPlayer == 1
          ? (this.currentPlayer += 1)
          : (this.currentPlayer -= 1);
        this.toCheck = "";
      }
    },

    clearAll: function() {
      this.message = "";
      this.inputs1.forEach(element => {
        element.value = "";
      });
      this.inputs2.forEach(element => {
        element.value = "";
      });
      this.inputs3.forEach(element => {
        element.value = "";
      });
      this.inputs4.forEach(element => {
        element.value = "";
      });
      this.inputs5.forEach(element => {
        element.value = "";
      });
      this.player1Score = 0;
      this.player2Score = 0;
      this.toCheck = "";
    }
  }
});
