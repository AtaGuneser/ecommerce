'use client'

import { register } from "module"
import AuthContainer from "../containers/AuthContainer"
import Heading from "../general/Heading"
import Input from "../general/Input"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import Button from "../general/Button"
import { FaGoogle } from "react-icons/fa";
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"


const LoginClient = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FieldValues>()

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        signIn('credentials', {
            ...data,
            redirect: false

        }).then((callback) => {
            if (callback?.ok) {
                router.push('/cart')
                router.refresh()
                toast.success('Login Successfully')
            }

            if (callback?.error) {
                toast.error(callback.error)
            }
        })
    }
    return (
        <AuthContainer>
            <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
                <Heading text='Login' center />
                <Input placeholder="Email" type="text" id="email" register={register} errors={errors} required />
                <Input placeholder="Password" type="password" id="password" register={register} errors={errors} required />
                <Button text="Log in " onClick={handleSubmit(onSubmit)} />
                <div className="text-center my-2 text-sm">Sign in <Link className="underline text-blue-900 " href='/register'>click here</Link> </div>
                <div className="text-center my-2 font-bold text-lg">OR</div>
                <Button text="Login in with Google" icon={FaGoogle} outline onClick={() => { }} />

            </div>
        </AuthContainer>
    )
}

export default LoginClient