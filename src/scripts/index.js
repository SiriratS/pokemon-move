import '../styles/index.scss';
import mockData from './data/data';
import moveBar from './move-bar/move-bar';

const config = {
    width: 1024,
    height: 500,
    bar: {
        width: 70,
        height: 180,
        gap: 30
    }
};

const chart = new moveBar(
    "#example-1", 
    mockData,
    config
);

chart.draw();
