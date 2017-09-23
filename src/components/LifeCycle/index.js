import React, {Component} from 'react';

/**
 * 实例化阶段
 * 1.getInitialState()
 * 2.componentWillMount()
 * 3.render()
 * 4.componentDidMount()
 *
 * 活动阶段
 * 1.componentWillReceiveProps()
 * 2.shouldComponentUpdate()
 * 3.componentWillUpdate()
 * 4.render()
 * 5.componentDidUpdate()
 */
class LifeCycle extends Component {
    constructor(props) {
        console.log('LifeCycle constructor----');
        super();
        this.state = {
            stateA: 1,
            stateB: 2
        };
        console.log(this.props);
        console.log(this.state);
    }
    /**
     * 使用class Xxx  extends Component的写法时，
     *
     * (1)不支持getInitialState()方法
     * 在constructor()中用this.state = xxx代替
     *
     * (2)不支持getDefaultProps()方法
     * 用defaultProps代替
     */
    /*
    getInitialState() {
        return {

        };
    }

    getDefaultProps() {
        return {
            propsA: 3,
            propsB: 4
        };
    }
     */
    componentWillMount() {
        console.log('LifeCycle componentWillMount----');
        console.log(this.props);
        console.log(this.state);
    }
    render() {
        console.log('LifeCycle render----');
        return (
            <div>
                {
                    `${this.state.stateA} 
                    ${this.state.stateB} 
                    ${this.props.propsA} 
                    ${this.props.propsB}
                    ${this.props.a}
                    ${this.props.b}`}
            </div>
        );
    }
    componentDidMount() {
        console.log('LifeCycle componentDidMount----');
        console.log(this.props);
        console.log(this.state);
        setTimeout(() => {
            this.setState({
                stateA: 'stateA',
                stateB: 'stateB'
            });
        }, 4000);
    }

    componentWillReceiveProps(nextProps) {
        console.log('LifeCycle componentWillReceiveProps----');
        console.log(nextProps);
    }

    /**
     * 如果返回false 就不会执行render()方法
     * @param nextProps
     * @param nextState
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifeCycle shouldComponentUpdate----');
        console.log(nextProps);
        console.log(nextState);
        return true;
    }

    componentWillUpdate() {
        console.log('LifeCycle componentWillUpdate----');
    }
    componentDidUpdate() {
        console.log('LifeCycle componentDidUpdate----');
    }

    componentWillUnmount() {
        console.log('LifeCycle componentWillUnmount----');
    }


}

LifeCycle.defaultProps = {
    propsA: 3,
    propsB: 4
};

export default LifeCycle;