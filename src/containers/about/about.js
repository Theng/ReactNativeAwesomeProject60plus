import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import Header from "../../components/MainHeader";
import LottieView from "lottie-react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSample } from "../../redux/actions";

class AboutScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    fetchSampleData = () => {
        this.props.fetchSample();
    };

    listSample = () => {
        console.log(this.props.sample.data)
        return (
            this.props.sample.data?
            <View>
                {this.props.sample.data.map((item,index)=>{
                    return(<Text style={{padding:16}} key={index}>{item.name}</Text>)
                })}
            </View>:
            null
        )
    }

    render() {
        return (
            <View testID="about-screen" style={{ flex: 1 }}>
                <Header />
                <ScrollView>
                    <LottieView
                        style={{ width: 250, height: 250, alignSelf: "center" }}
                        source={require("../../assets/8252-looking-for-jobs.json")}
                        autoPlay
                        loop
                    />
                    <TouchableOpacity
                        onPress={this.fetchSampleData}
                        style={styles.buttonStyle}
                    >
                        <Text style={styles.buttonText}>
                            {this.props.sample.fetching
                                ? "..."
                                : this.props.fetchError
                                ? "Feech error"
                                : "Fetch sample data"}
                        </Text>
                    </TouchableOpacity>
                    {this.listSample()}
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        sample: state.sample
    };
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchSample
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(AboutScreen);

const styles = {
    buttonStyle: {
        padding: 16,
        margin: 16,
        backgroundColor: "#3498db",
        width: 160
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold"
    }
};
