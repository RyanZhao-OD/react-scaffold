import React, {Component} from "react";

class RefFunction extends Component {
    render() {
        return (
            <div ref={compInstance => {
                // 参数是渲染出来Dom元素
                console.log('RefFunction ref function 在挂载之后，componentDidMount之前执行');
                console.log(compInstance);      // dom元素
                console.log(Object.prototype.toString.call(compInstance));  // [object HTMLDivElement]
                this.div = compInstance;
            }}>RefFunction Component</div>
        );
    }
    componentDidMount() {
        console.log('RefFunction componentDidMount-----');
        console.log(this.refs);     // {}
    }
}

export default RefFunction;