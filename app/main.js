import React from 'react';
import {
	View,
	Image,
	Alert,
	BackAndroid,
} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import AppSettings from './AppSettings';
import css from './styles/css';
import general from './util/general';

// GPS
import GeoLocationContainer from './containers/geoLocationContainer';

// VIEWS
import Home from './views/Home';
import SurfReport from './views/weather/SurfReport';
import ShuttleStop from './views/shuttle/ShuttleStop';
import DiningDetail from './views/dining/DiningDetail';
import DiningNutrition from './views/dining/DiningNutrition';
import EventDetail from './views/events/EventDetail';
import WebWrapper from './views/WebWrapper';
import WelcomeWeekView from './views/welcomeWeek/WelcomeWeekView';
import NewsDetail from './views/news/NewsDetail';
import FeedbackView from './views/FeedbackView';
import PreferencesView from './views/preferences/PreferencesView';
import NearbyMapView from './views/mapsearch/NearbyMapView';
import TabIcons from './navigation/TabIcons';
import DataListViewAll from './views/common/DataListViewAll';
import ShuttleRoutesListView from './views/shuttle/ShuttleRoutesListView';
import ShuttleStopsListView from './views/shuttle/ShuttleStopsListView';
import ShuttleSavedListView from './views/shuttle/ShuttleSavedListView';

const RouterWithRedux = connect()(Router);

const campusLogo = () => (
	<Image source={require('./assets/img/UCSanDiegoLogo-White.png')} style={css.navCampusLogoTitle} />
);

const _exitHandler = () => {
	Alert.alert(
		'Exit',
		'Are you sure you want to exit this app?',
		[
			{ text: 'Cancel', onPress: () => {} },
			{ text: 'Yes', onPress: () => BackAndroid.exitApp() }
		]
	);
	return true;
};

const scenes = Actions.create(
	<Scene key="root">
		<Scene key="tabbar" initial tabs tabBarStyle={general.platformIOS() ? css.tabBarIOS : css.tabBarAndroid}>
			<Scene key="tab1" title={AppSettings.APP_NAME} initial icon={TabIcons}>
				<Scene key="Home" component={Home} renderTitle={() => campusLogo()} />
				<Scene key="SurfReport" component={SurfReport} title="Surf Report" />
				<Scene key="ShuttleStop" component={ShuttleStop} title="Shuttle" />
				<Scene key="DiningList" component={DiningList} title="Dining" />
				<Scene key="DiningDetail" component={DiningDetail} title="Dining" />
				<Scene key="DiningNutrition" component={DiningNutrition} title="Nutrition" />
				<Scene key="EventDetail" component={EventDetail} title="Events" />
				<Scene key="WebWrapper" component={WebWrapper} />
				<Scene key="WelcomeWeekView" component={WelcomeWeekView} title="Welcome Week" />
				<Scene key="QuicklinksListView" component={QuicklinksListView} title="Links" />
				<Scene key="NewsDetail" component={NewsDetail} title="News" />
				<Scene key="DataListViewAll" component={DataListViewAll} />
				<Scene key="ShuttleRoutesListView" component={ShuttleRoutesListView} title="Choose Route" />
				<Scene key="ShuttleStopsListView" component={ShuttleStopsListView} title="Choose Stop" />
				<Scene key="ShuttleSavedListView" component={ShuttleSavedListView} title="Manage Stops" />
			</Scene>
			<Scene key="tab2" title="Map" component={NearbyMapView} icon={TabIcons} />
			<Scene key="tab3" title="Feedback" component={FeedbackView} icon={TabIcons} />
			<Scene key="tab4" title="Settings" component={PreferencesView} icon={TabIcons} />
		</Scene>
	</Scene>
);

<<<<<<< HEAD
		return (
			<View style={css.flex}>
				<RouterWithRedux
					navigationBarStyle={general.platformIOS() ? css.navIOS : css.navAndroid}
					titleStyle={general.platformIOS() ? css.navIOSTitle : css.navAndroidTitle}
					barButtonIconStyle={general.platformIOS() ? css.navIOSIconStyle : css.navAndroidIconStyle}
					backButtonTextStyle={general.platformIOS() ? css.navBackButtonTextIOS : css.navBackButtonTextAndroid}
					backTitle="Back"
					onExitApp={this._exitHandler}
				>
					<Scene key="root">
						<Scene key="tabbar" initial tabs tabBarStyle={general.platformIOS() ? css.tabBarIOS : css.tabBarAndroid}>
							<Scene key="tab1" title={AppSettings.APP_NAME} initial icon={TabIcons}>
								<Scene key="Home" component={Home} renderTitle={() => this.campusLogo()} />
								<Scene key="SurfReport" component={SurfReport} title="Surf Report" />
								<Scene key="ShuttleStop" component={ShuttleStop} title="Shuttle" />
								<Scene key="DiningDetail" component={DiningDetail} title="Dining" />
								<Scene key="DiningNutrition" component={DiningNutrition} title="Nutrition" />
								<Scene key="EventDetail" component={EventDetail} title="Events" />
								<Scene key="WebWrapper" component={WebWrapper} />
								<Scene key="WelcomeWeekView" component={WelcomeWeekView} title="Welcome Week" />
								<Scene key="NewsDetail" component={NewsDetail} title="News" />
								<Scene key="DataListViewAll" component={DataListViewAll} />
							</Scene>
							<Scene key="tab2" title="Map" component={NearbyMapView} icon={TabIcons} />
							<Scene key="tab3" title="Feedback" component={FeedbackView} icon={TabIcons} />
							<Scene key="tab4" title="Settings" component={PreferencesView} icon={TabIcons} />
						</Scene>
					</Scene>
				</RouterWithRedux>
			</View>
		);
	}
}
=======
const Main = () => (
	<View style={css.flex}>
		<GeoLocationContainer />
		<RouterWithRedux
			navigationBarStyle={general.platformIOS() ? css.navIOS : css.navAndroid}
			titleStyle={general.platformIOS() ? css.navIOSTitle : css.navAndroidTitle}
			barButtonIconStyle={general.platformIOS() ? css.navIOSIconStyle : css.navAndroidIconStyle}
			backButtonTextStyle={general.platformIOS() ? css.navBackButtonTextIOS : css.navBackButtonTextAndroid}
			backTitle="Back"
			onExitApp={_exitHandler}
			scenes={scenes}
		/>
	</View>
);

export default Main;
>>>>>>> v5.1-hotfix
