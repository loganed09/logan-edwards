const plannerPic = require("../../resources/images/plannerPic.PNG");
const stopWatchPic = require("../../resources/images/StopWatchPic.PNG");
const excursionPic = require("../../resources/images/ExcursionPic.PNG");
const ticTacToePic = require("../../resources/images/TicTacToePic.PNG");
const tipCalcPic = require("../../resources/images/TipCalcPic.PNG");
const jammingPic = require("../../resources/images/jamming.PNG");
const ravPic = require("../../resources/images/ravenous.PNG");

export const projects = [
    {
        title: 'This Project',
        subtitle: 'React and CSS',
        description: 'Portfolio created using React and CSS',
        image: '',
        link: '',
        code: ''
    },
    {
        title: 'Tic Tac Toe',
        subtitle: 'HTML, JS, CSS',
        description: 'Tic Tac Toe game',
        image: ticTacToePic.default,
        link: "https://loganed09.github.io/tictactoe/",
        code: 'https://github.com/loganed09/tictactoe'
    },
    {
        title: 'Mock up Website',
        subtitle: 'HTML, CSS',
        description: 'This CodeCademy project is a mock up website.  CodeCademy gave me the blueprints to construct it into a static website.',
        image: excursionPic.default,
        link: 'https://loganed09.github.io/-excursion/',
        code: 'https://github.com/loganed09/-excursion'
    },
    {
        title: 'StopWatch',
        subtitle: 'HTML, CSS, JS',
        description: 'Stop Watch application',
        image: stopWatchPic.default,
        link: 'https://loganed09.github.io/stopWatch/',
        code: 'https://github.com/loganed09/stopWatch'
    },
    {
        title: 'Tip Calculator',
        subtitle: 'React, CSS',
        description: 'Tip Calculator using React',
        image: tipCalcPic.default,
        link: 'https://loganed09.github.io/tipCalculator/',
        code: 'https://github.com/loganed09/tipCalculator'
    },
    {
        title: 'React Planner',
        subtitle: 'React, CSS',
        description: 'Planner made with React',
        image: plannerPic.default,
        link: 'https://loganed09.github.io/planner/',
        code: 'https://github.com/loganed09/planner'
    },
    {
        title: 'Jamming',
        subtitle: 'React, CSS',
        description: 'React application with React classes.  This project uses the Spotify API to create and save playlists.',
        image: jammingPic.default,
        link: 'https://loganed09.github.io/Jamming/',
        code: 'https://github.com/loganed09/Jamming'
    },
    {
        title: 'Ravenous',
        subtitle: 'React, CSS',
        description: 'React application made with Hooks and React Functions. This project uses the Yelp API to search for food by name and location. Also, has the ability to sort the results.',
        image: ravPic.default,
        link: 'https://loganed09.github.io/ravenous/',
        code: 'https://github.com/loganed09/ravenous'
    }
]