const express = require('express')
const axios = require('axios')
const app = express()
const port = 3001

const resData = {
  rawData: [],
  pageViewData: {},
  hourViewData: {},
  userViewData: {}
}

const getHighestPageViews = (data) => {
  let pageViews = {};
  data.forEach(element => {
    if(pageViews[element.pagetitle] === undefined) {
      pageViews[element.pagetitle] = 1;
    }
    else {
      pageViews[element.pagetitle]++;
    }
  });
  // console.log(pageViews);
  resData.pageViewData = pageViews;
}

const getHighestHoursView = (data) => {
  let hoursView = {
    '9:00 - 9:15 am': 0,
    '9:15 - 9:30 am': 0,
    '9:30 - 9:45 am': 0,
    '9:45 - 10:00 am': 0,
    '10:00 - 10:15 am': 0,
    '10:15 - 10:30 am': 0
  };
  data.forEach((element) => {
    var hour = element.timestamp.substring(12,14);
    var min = element.timestamp.substring(15,17);
    if(hour === '09') {
      if(min <= 15) {
        hoursView['9:00 - 9:15 am']++;
      }
      else if(min <= 30) {
        hoursView['9:15 - 9:30 am']++;
      }
      else if(min <= 45) {
        hoursView['9:30 - 9:45 am']++;
      }
      else if(min < 60) {
        hoursView['9:45 - 10:00 am']++;
      }
    }
    else {
      if(min <= 15) {
        hoursView['10:00 - 10:15 am']++;
      }
      else if(min <= 30) {
        hoursView['10:15 - 10:30 am']++;
      }
    }
  })
  resData.hourViewData = hoursView;
}

const getHighestPageViewsByUser = (data) => {
  let userView = {};
  data.forEach((element) => {
    if(userView[element.uid] === undefined) {
      userView[element.uid] = 1;
    }
    else {
      userView[element.uid]++;
    }
  })
  resData.userViewData = userView;
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/apidata', (req, res) => {
  axios.get("https://resisted-aboard-koala.glitch.me/events")
  .then(response => response.data)
  .then(data => {
    resData.rawData = data;
    getHighestPageViews(data);
    getHighestHoursView(data);
    getHighestPageViewsByUser(data);
    // console.log(resData.pageViewData)
  })
  .then(() => {
    // console.log(resData)
    res.send(resData)}
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})