import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, FlatList, Text, View} from "react-native";
import {fetchPizzasList, getPizzaInfo} from "../store/actions";
import OnePizzaWindow from "../components/OnePizzaWindow";

class AllPizzas extends Component {

    componentDidMount() {
        this.props.fetchPizzasList();
    }

    buildNewArray = () => {
        let newArray = [];
        for (let pizza in this.props.pizzas) {
            newArray.push({...this.props.pizzas[pizza].pizzas, key: pizza})
        }
        return newArray;
    };

    render() {
        return (
            <View>
                <FlatList
                    data={this.buildNewArray()}
                    renderItem={(pizza) => <OnePizzaWindow
                                                           onPress={this.getPizzaInfo}
                                                           image={pizza.item.image}
                                                           text={pizza.item.title}
                                                           price={pizza.item.price}/>}
                />
                <View>
                    <Text>Total:</Text>
                    <Button
                        onPress={() => alert('vnsflvn')}
                        title="Checkout"/>
                </View>
            </View>
        );
    }

}

const mapStateToProps = state => {
    return {
        pizzas: state.pizzas
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPizzasList: () => dispatch(fetchPizzasList()),
        getPizzaInfo: () => dispatch(getPizzaInfo())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(AllPizzas);
