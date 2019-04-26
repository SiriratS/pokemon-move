import * as d3 from 'd3';

export default class BarChart {

    constructor(
        selectElement,
        data,
        config
    ) {
        this.data = data;
        this.barConfig = config.bar;
        this.mainElement = d3.select(selectElement).append("svg")
            .attr("class", "container")
            .attr("width", config.width)
            .attr("height", config.height)
            .append("g");
    }

    draw() {
        this.createBars();
        setInterval(() => { 
            this.moveBar(this.barConfig.width);
        }, 1000);
    };

    createBars() {
        this.mainElement.selectAll()
            .data(this.data)
            .enter()
            .append('rect')
            .attr("class", "bar")
            .attr('y', 0)
            .attr('fill', (data) => data.color)
            .attr('x', 0)
            .attr('height', this.barConfig.height)
            .attr('width', this.barConfig.width);
    }

    moveBar(startX) {
        this.mainElement.selectAll('.bar')
            .data(this.data)
            .attr('height', (data) => data.changeHeight ? data.changeHeight: this.barConfig.height)
            .attr('x', (_data, i) => {
                return startX * (i + 1) + (this.barConfig.gap * i); 
            })
            .attr('y', (data) => {
                return data.moveToY;
            });
    }

};