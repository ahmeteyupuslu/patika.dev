formik bir form aracı, reactta kullandığımız form işlemleri uygularken kolaylık sağlıyor. state ile de bunları yapabiliriz fakat daha fazla efor harcamamız gerekir.
 

### validations.js
```js
import * as yup from "yup";

const validations = yup.object()shape({
    email: yup
        .string()
        .email("Geçerli bir email girin.")
        .required("Zorunlu alan.")
    password: yup
        .string()
        .min(5,"Parolanız en az 5 karakter olmalıdır.")
        .required("Zorunlu alan.")
    passwordConfirm: yup
        .string()
        .min([yup.ref("password")], "Parolalar uyuşmuyor.")
        .required("Zorunlu alan."),
});

export default validations;
```

### signUp.js
```js
import {useFormik} from "formik";
import validtionSchema from "./validations";

function Signup(){
    const{ handleSubmit, handleChange, handleBlur, values, error, touched} =
        useFormik({
            initialValue:{
                email: "",
                password: "",
                paswordConfirm: "",
            },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema,
        });
    return(
        <div>
        <h1>Sign Up!</h1>
        <form onsubmit={handleSubmit}>
            <label>Email</label>
            <input
                name="email"
                value={values.email}
                onChnage={handleChange}
                onBlur={handleBlur}
            />
            {errors.email && touched.email && (
                <div classname="error">{errors.email}</div>
            )}

            <br/>
            <br/>

            <label>Password</label>
            <input
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.password && touched.password && (
                <div classname="error">{errors.password}</div>
            )}
            <br/>
            <br/>
            <label>Confirm Password</label>
            <input
                name="passwordConfirm"
                value={values.passwordConfirm}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.passwordConfirm && touched.passwordConfirm && (
                <div classname="error">{errors.passwordConfirm}</div>
            )}
            <br/>
            <br/>
            <button type="submit">Submit</button>
            <br/>
            <br/>
            <code>{JSON.stringify(values)}</code>
    )
}
export default Signup;
```