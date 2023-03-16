import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { getDatabase, set, ref, onValue, push } from "firebase/database";
import app from "./Firebaseconfig";

const auth = getAuth(app);
const database = getDatabase(app);


let signUpUser = (obj) => {

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then(res => {
                obj.id = res.user.uid
                const reference = ref(database, `users/${obj.id}`)
                set(reference, obj)

            }).then(() => {
                resolve("You SignUp Successuly")
            })
            .catch((err) => reject(err.message))


    });

};
let loginUser = (obj) => {

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then(res => {
                console.log(res.user.uid)
            }).then(() => resolve(alert("You LogIn Successuly")))
            .catch(err => reject(err.message))
    })
};

let signoutUser = () => {
    return new Promise((resolve, reject) => {
        signOut(auth).then(res => console.log(res))
            .catch(err => console.log(err))
    })

};

let postfbdata = (obj, node) => {

    return new Promise((resolve, reject) => {
        let keyrefr = ref(database, `${node}/`);
        obj.id = push(keyrefr).key;
        let objRefre = ref(database, `${node}/${obj.id}`)
        let dataref = ref(database, `${node}`)
        set(objRefre, obj).then((res) => {
            onValue(dataref, (data) => {
                if (data.exists()) {
                    resolve(data.val());
                } else {
                    alert("Data Not Found :(");
                }
            })



        }).catch((err) => reject(err.message))

    })


};
let fbGetById = () => { };
let fbEdit = () => { };
let fbDelete = () => { };
let fbGet = () => { };
export {
    postfbdata,
    signUpUser,
    loginUser,
    signoutUser,
    fbGet,
    fbGetById,
    fbEdit,
    fbDelete,
};