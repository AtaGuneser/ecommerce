'use client'

import { register } from "module"
import AuthContainer from "../containers/AuthContainer"
import Heading from "../general/Heading"
import Input from "../general/Input"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import Button from "../general/Button"
import { FaGoogle } from "react-icons/fa";
import Link from "next/link"
import axios from "axios"
import toast from "react-hot-toast"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"


const RegisterClient = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FieldValues>()

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        axios.post('/api/register', data).then(() => {
            toast.success('New Profile Created')
            signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false
            }).then((callback: any) => {
                if (callback?.ok) {
                    router.push('/cart')
                    router.refresh()
                    toast.success('Login Successfully')
                }

                if (callback?.error) {
                    toast.error(callback.error)
                }
            })
        })
    }
    return (
        <AuthContainer>
            <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
                <Heading text='Register' center />
                <Input placeholder="Name" type="text" id="name" register={register} errors={errors} required />
                <Input placeholder="Email" type="text" id="email" register={register} errors={errors} required />
                <Input placeholder="Password" type="password" id="password" register={register} errors={errors} required />
                <Button text="Sign in " onClick={handleSubmit(onSubmit)} />
                <div className="text-center my-2 text-sm">Already Sign in ?  <Link className="underline text-blue-900 " href='/login'>click here</Link> </div>
                <div className="text-center my-2 font-bold text-lg">OR</div>
                <Button text="Sign in with Google" icon={FaGoogle} outline onClick={() => { }} />

            </div>
        </AuthContainer>
    )
}

export default RegisterClient