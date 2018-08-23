import express from 'express';

const data = [
  
    {
      id: 1,
      title: 'What is dynamic data?',
      body: 'A found out there is dyanmic data in javascript, what does it mean.',
      timestamp: 'Sep 8, 2016: 12:45pm',
      username: 'debelistic',
      answers: [
        {
          id: 1,
          body: 'They are Lorem ipsum dolor sit amet, lobortis sed ullamcorper facilisi morbi libero hendrerit, mattis proin amet morbi eros diam lorem. Commodo nonummy amet sodales, mauris lectus pellentesque, vel elit sem, venenatis ac',
          username: 'Crowford',
          timestamp: 'Sep 8, 2016: 04:45pm'
        },
        {
          id: 2,
          body: 'Ut et, mauris vel elit, tellus suspendisse aliquam nec. Purus augue eleifend beatae id vel a. Orci eget libero. Lorem ipsum dolor sit amet, lobortis sed ullamcorper facilisi morbi libero hendrerit, mattis proin amet morbi eros diam lorem. Commodo nonummy amet sodales, mauris lectus pellentesque, vel elit sem, venenatis ac',
          username: 'Arnold',
          timestamp: 'Sep 27, 2016: 04:45am'
        },
        {
          id: 3,
          body: 'They are Lorem ipsum dolor sit amet, Ut et, mauris vel elit, tellus suspendisse aliquam nec. Purus augue eleifend beatae id vel a. Orci eget libero. morbi libero hendrerit, mattis proin amet morbi eros diam lorem. Commodo nonummy amet sodales, mauris lectus pellentesque, vel elit sem, venenatis ac',
          username: 'Smith',
          timestamp: 'Oct 2016: 04:45pm'
        }
      ]
    },
    {
      id: 2,
      title: 'What is artificial intelligence?',
      body: 'Can someone explain artificial intelligence in layman Lorem ipsum dolor sit amet, lobortis sed ullamcorpe javascript, what does it mean.',
      timestamp: 'Jul 9, 2016: 12:45pm',
      username: 'Mycroft',
      answers: [
        {
          id: 1,
          body: 'Lorem ipsum dolor sit amet, lobortis sed ullamcorpeamet, lobortis sed ullamcorper facilisi morbi libero hendrerit, mattis proin amet morbi eros diam lorem. Commodo nonummy amet sodales, mauris lectus pellentesque, vel elit sem, venenatis ac',
          username: 'Jason',
          timestamp: 'Jul 9, 2016: 04:45pm'
        },
        {
          id: 2,
          body: 'Lorem ipsum dolor sit amet, lobortis sed ullamcorpeamet, lobortis sed ullamcorper facilisi morbi libero hendrerit, mattis proin amet morbi eros diam lorem. Commodo nonummy amet sodales, mauris lectus pellentesque, vel elit sem, venenatis ac',
          username: 'Robert',
          timestamp: 'Sep 8, 2016: 03:45am'
        },
        {
          id: 3,
          body: 'Lorem ipsum dolor sit amet, lobortis sed ullamcorpeamet, lobortis sed ullamcorper facilisi morbi libero hendrerit, mattis proin amet morbi eros diam lorem. Commodo nonummy amet sodales, mauris lectus pellentesque, vel elit sem, venenatis ac',
          username: 'Mikelson',
          timestamp: 'Sep 12, 2016: 02:45pm'
        }
      ]
    },
    {
      id: 3,
      title: 'What is andvance progenesis?',
      body: 'A found out there Lorem ipsum dolor sit amet, lobortis sed ullamcorpe, what does it mean.',
      timestamp: 'Jan 8, 2017: 12:45pm',
      username: 'christiana',
      answers: [
        {
          id: 1,
          body: 'Lorem ipsum dolor sit amet, lobortis sed ullamcorpem dolor sit amet, lobortis sed ullamcorper facilisi morbi libero hendrerit, mattis proin amet morbi eros diam lorem. Commodo nonummy amet sodales, mauris lectus pellentesque, vel elit sem, venenatis ac',
          username: 'Macueen',
          timestamp: 'Jan 9, 2017: 04:45pm'
        },
        {
          id: 2,
          body: 'Lorem ipsum dolor sit amet, lobortis sed ullamcorpem dolor sit amet, lobortis sed ullamcorper facilisi morbi libero hendrerit, mattis proin amet morbi eros diam lorem. Commodo nonummy amet sodales, mauris lectus pellentesque, vel elit sem, venenatis ac',
          username: 'Giroud',
          timestamp: 'Feb 1, 2017: 11:05pm'
        },
        {
          id: 3,
          body: 'Lorem ipsum dolor sit amet, lobortis sed ullamcorpem dolor sit amet, lobortis sed ullamcorper facilisi morbi libero hendrerit, mattis proin amet morbi eros diam lorem. Commodo nonummy amet sodales, mauris lectus pellentesque, vel elit sem, venenatis ac',
          username: 'Oliver',
          timestamp: 'Feb 3, 2017: 08:45pm'
        }
      ]
    }  
];

export default data;