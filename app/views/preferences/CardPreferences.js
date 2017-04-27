import React, { Component } from 'react';
import {
	View,
	Text,
	Switch,
	StyleSheet,
	Platform,
	Animated,
	Easing
} from 'react-native';

import { connect } from 'react-redux';
import SortableList from 'react-native-sortable-list';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Card from '../card/Card';
import css from '../../styles/css';
import { getMaxCardWidth } from '../../util/general';

// View for user to manage preferences, including which cards are visible
export default class CardPreferences extends Component {
<<<<<<< HEAD
	componentWillMount() {
		this.setState({ cardObject: this.getCardObject() });
	}

	setCardState = (id, state) => {
		this.props.setCardState(id, state);
	}

	getCardObject = () => {
		const cardArray = [];
		const cardObject = {};
		for (let i = 0; i < this.props.cardOrder.length; ++i) {
			const key = this.props.cardOrder[i];
			cardArray.push(this.props.cards[key]);
			cardObject[i] = this.props.cards[key];
		}
		return cardObject;
	}

	getOrderedArray = () => {
		const orderArray = [];
		for (let i = 0; i < this._order.length; ++i) {
			orderArray.push(this.state.cardObject[this._order[i]].id);
		}
		return orderArray;
	}

	_handleRelease = () => {
		if (this._order) {
			const orderedCards = this.getOrderedArray();
			this.props.orderCards(orderedCards);
		}
=======
	_setCardState = (card, state) => {
		this.props.setCardState(card, state);
		this.props.updateScroll(); // reset homeview scroll
	}

	// render out all the cards, currently showing or not
	_renderCards = () => {
		return Object.keys(this.props.cards).map(key => {

			const cardActive = this.props.cards[key].active;
			const cardName = this.props.cards[key].name;

			return (
				<View key={key} style={css.preferencesContainer}>
					<View style={css.spacedRow}>
						<View style={css.centerAlign}>
							<Text style={css.prefCardTitle}>{cardName}</Text>
						</View>
						<View style={css.centerAlign}>
							<Switch
								onValueChange={(value) => { this._setCardState(key, value); }}
								value={cardActive}
							/>
						</View>
					</View>
				</View>
			);
		});
>>>>>>> v5.1-hotfix
	}

	render() {
		return (
			<Card id="cards" title="Cards" hideMenu={true}>
				<View style={styles.list_container}>
					<SortableList
						scrollEnabled={false}
						data={this.state.cardObject}
						renderRow={
							({ data, active, disabled }) =>
								<PrefItem
									data={data}
									active={active}
									updateState={this.setCardState}
								/>
						}
						onChangeOrder={(nextOrder) => { this._order = nextOrder; }}
						onReleaseRow={(key) => this._handleRelease()}
					/>
				</View>
			</Card>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		cards: state.cards.cards,
		cardOrder: state.cards.cardOrder
	};
}

function mapDispatchtoProps(dispatch) {
	return {
<<<<<<< HEAD
		orderCards: (newOrder) => {
			dispatch({ type: 'ORDER_CARDS', newOrder });
		},
		setCardState: (id, state) => {
			dispatch({ type: 'UPDATE_CARD_STATE', id, state });
=======
		setCardState: (card, state) => {
			dispatch(setCardState(card, state));
		},
		updateScroll: () => {
			dispatch({ type: 'UPDATE_HOME_SCROLL', scrollY: 0 });
>>>>>>> v5.1-hotfix
		}
	};
}

<<<<<<< HEAD
class PrefItem extends React.Component {

	constructor(props) {
		super(props);

		this._active = new Animated.Value(0);

		this._style = {
			...Platform.select({
				ios: {
					shadowOpacity: this._active.interpolate({
						inputRange: [0, 1],
						outputRange: [0, 0.2],
					}),
					shadowRadius: this._active.interpolate({
						inputRange: [0, 1],
						outputRange: [2, 10],
					}),
				},

				android: {
					marginTop: this._active.interpolate({
						inputRange: [0, 1],
						outputRange: [0, 10],
					}),
					marginBottom: this._active.interpolate({
						inputRange: [0, 1],
						outputRange: [0, 10],
					}),
					elevation: this._active.interpolate({
						inputRange: [0, 1],
						outputRange: [2, 6],
					}),
				},
			})
		};

		this.state = {
			switchState: this.props.data.active
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.active !== nextProps.active) {
			Animated.timing(this._active, {
				duration: 300,
				easing: Easing.bounce,
				toValue: Number(nextProps.active),
			}).start();
		}
	}

	_handleToggle = (value) => {
		const { data, updateState } = this.props;
		this.setState({ switchState: value });
		updateState(data.id, value);
	}

	render() {
		const { data } = this.props;
		return (
			<Animated.View
				style={[styles.list_row, this._style]}
			>
				<Icon
					name="drag-handle"
					size={20}
				/>
				<Text style={styles.name_text}>{data.name}</Text>
				<Switch
					onValueChange={(value) => { this._handleToggle(value); }}
					value={this.state.switchState}
				/>
			</Animated.View>
		);
	}
}

const styles = StyleSheet.create({
	list_row: { backgroundColor: '#F9F9F9', flexDirection: 'row', alignItems: 'center', width: getMaxCardWidth(), padding: 7, borderBottomWidth: 1, borderBottomColor: '#EEE' ,
		...Platform.select({
			ios: {
				shadowOpacity: 0,
				shadowOffset: { height: 2, width: 2 },
				shadowRadius: 2,
			},

			android: {
				margin: 0,
				elevation: 0,
			},
		})
	},
	name_text: { flex: 1, margin: 7 },
	list_container: { width: getMaxCardWidth() }
});

=======
>>>>>>> v5.1-hotfix
module.exports = connect(mapStateToProps, mapDispatchtoProps)(CardPreferences);
