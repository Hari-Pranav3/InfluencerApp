import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StepIndicator from 'react-native-step-indicator';

const Tracker = ({route}) => {
    const {transaction}= route.params;
    const labels = [
        "Submitted",
        "Approval 1",
        "Approval 2"
    ];
    let currentPosition = 0;
    if(transaction.Approval1Status==="Approved"){
        currentPosition=1;
    }
    if(transaction.Approval2Status==="Approved"){
        currentPosition=2
    }
    const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize:30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#fe7013',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#fe7013',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#fe7013',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#fe7013',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#fe7013',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: '#fe7013'
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Transaction Tracker
            </Text>

            <StepIndicator
                customStyles={customStyles}
                currentPosition={currentPosition}
                stepCount={3}
                labels={labels}
            />

            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Submitted</Text>

                <Text>
                    Date: {transaction.SubmitDate?.split('T')[0]}
                </Text>

                <Text>
                    Time: {transaction.SubmitTime?.substring(11, 19)}
                </Text>
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Approval 1</Text>

                <Text>
                    Status: {transaction.Approval1Status || "Pending"}
                </Text>

                <Text>
                    Date: {
                        transaction.Approval1Date
                            ? transaction.Approval1Date.split('T')[0]
                            : "-"
                    }
                </Text>

                <Text>
                    Time: {
                        transaction.Approval1Time
                            ? transaction.Approval1Time.substring(11, 19)
                            : "-"
                    }
                </Text>

                <Text>
                    Approved By: {transaction.Approval1by || "-"}
                </Text>
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Approval 2</Text>

                <Text>
                    Status: {transaction.Approval2Status || "Pending"}
                </Text>

                <Text>
                    Date: {
                        transaction.Approval2Date
                            ? transaction.Approval2Date.split('T')[0]
                            : "-"
                    }
                </Text>

                <Text>
                    Time: {
                        transaction.Approval2Time
                            ? transaction.Approval2Time.substring(11, 19)
                            : "-"
                    }
                </Text>

                <Text>
                    Approved By: {transaction.Approval2by || "-"}
                </Text>
            </View>
        </View>
    );
};

export default Tracker;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
    },

    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
    },

    detailsContainer: {
        marginTop: 30,
        padding: 15,
        borderWidth: 1,
        borderColor: '#dddddd',
        borderRadius: 10,
        backgroundColor: '#fafafa',
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    status: {
        marginTop: 5,
        fontWeight: '600',
    },
})