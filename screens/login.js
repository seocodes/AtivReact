import { Text, View, StyleSheet, TextInput, Button } from "react-native";

export default function Login(){
    return(
        <View style={styles.container}>
            <Text style={styles.textHeader}>LOGIN - GUTO CURSOS</Text>
            <Text style={styles.textInfo}>Mini-aula sobre sistemas operacionais do Augustinho Games 3190</Text>
            <TextInput
            style={styles.txtinput}
            placeholder="Nome"
            />
            <TextInput
            style={styles.txtinput}
            placeholder="Senha"
            />          
            <Button
              title="Enviar"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
    },
    txtinput: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 5,
        margin: 5,
    },
    textHeader: {
        fontSize: 32,
        alignSelf: "center",
        margin: 5,
        fontWeight: "600",
    },
    textInfo: {
        fontSize: 16,
        alignSelf: "center",
        margin: 5,
        marginRight: 50,
        marginLeft: 50,
        marginBottom: 25,
    },
      

})