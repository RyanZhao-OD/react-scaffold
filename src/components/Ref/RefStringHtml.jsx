import React, {Component} from "react";
import RefStringComponent from './RefStringComponent.jsx';
import RefFunction from './RefFunction.jsx';

export default class RefStringHtml extends Component {
    render() {

        return (
            <div ref="refStringHtml-div">
                <p ref="refStringHtml-p">RefStringHtml Component</p>
                <RefStringComponent ref="refStringComponent" />
                <RefFunction ref="refFunction" />
            </div>
        );
    }
    componentDidMount() {
        console.log('RefStringHtml componentDidMount-----');
        console.log(this.refs);

        // 如果对组件添加ref属性 拿到的是组件的实例
        console.log(this.refs.refStringComponent instanceof RefStringComponent);

        // 如果是html 拿到的是Dom元素
        console.log(this.refs.refStringComponent.refs['refStringComponent-div']);

    }
}