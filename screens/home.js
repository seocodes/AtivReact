import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";

export default function Home(){
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={{uri: "https://i.pinimg.com/736x/64/eb/ef/64ebefbbd558d77f1a1e0d01a4e050c1.jpg"}}>
            <View style={styles.nav}>
            <Text style={styles.textHeader}>HOME | MINI-AULA SOBRE SISTEMAS OPERACIONAIS</Text>
            <Image style={{alignSelf: "center",
        width: 120,
        height: 30}} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png"}}/>
            </View>

        <Image style={{alignSelf: "center",
        width: 300,
        height: 2}} source={{uri: "https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg"}}/>
            

            <Text style={styles.texts}>O Windows 11 é a nova versão do sistema operacional da Microsoft, lançada em outubro de 2021, e traz uma série de novidades em relação ao Windows 10, como um design mais moderno e minimalista, uma central de widgets além da possibilidade de rodar aplicativos Android.</Text>
            <Image style={styles.images} source={require('../assets/windows11-logo.jpg') }/>

            <Text style={styles.texts}>O Ubuntu do Linux é um sistema operacional, que utiliza o kernel, ou “núcleo” do Linux. Isso faz com que ele seja open source e extremamente acessível, assim como acontece com o próprio Linux.</Text>
            <Image style={styles.images} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUXYtZGaSVpgszvcdic5jZKt2rhQZqPGEng&s"}}/>

            <Text style={styles.texts}>O Mac OS é o sistema operacional dos computadores da linha Macintosh, da Apple. O seu surgimento ocorreu em 1984, junto ao lançamento do primeiro Macintosh.</Text>
            <Image style={styles.images} source={{uri: "https://logowik.com/content/uploads/images/mac-os.jpg"}}/>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-evenly",
    },
    textHeader: {

        color: "white",
        fontSize: 24,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 50,
        fontWeight: "700",
    },
    texts: {
        flex: 1,
        color: "white",
        alignSelf: "center",
        fontSize: 16,
        padding: 50,
    },
    background: {
        flex: 1,
    },
    images: {
        alignSelf: "center",
        width: 100,
        height: 100,
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    }

})