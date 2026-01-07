"use client";

import React, { useRef, useState, FormEvent } from 'react';
import Button from '../elements/Button';
import Input from '../elements/Input';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (form.current) {
            emailjs.sendForm('service_l5bxlxr', 'template_wdit4qy', form.current, {
                publicKey: 'PReBdvctBl7ZGOidT',
            })
                .then(
                    () => {
                        setLoading(false);
                        alert('Message sent successfully!');
                        form.current?.reset();
                    },
                    (error) => {
                        setLoading(false);
                        console.log('FAILED...', error.text);
                        alert('Failed to send message. Please try again.');
                    },
                );
        }
    };

    return (
        <section className="grid place-items-center py-[130px] md:px-0 px-6 bg-linear-180 from-black from-purple-950 to-black">
            <div className="md:w-[70%] lg:w-[50%]">
                <div className="regular text-white md:text-[40px] text-[30px]">Get in touch</div>
                <p className="text-white md:text-[16px] regular mt-4 text-[14px]">I'm always interested in exploring new opportunities, collaborating, or exchanging ideas with like-minded individuals. Feel free to book a call or email me if you'd like to see my portfolio deck or to discuss a potential project.</p>

                <form ref={form} onSubmit={sendEmail} className="space-y-6 mt-8">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                        <Input
                            name="user_name"
                            placeholder='Full Name'
                            inputStyle='rounded-[12px] text-gray-200'
                            required
                        />
                        <Input
                            name="user_email"
                            type="email"
                            placeholder='Email Address'
                            inputStyle='rounded-[12px] text-gray-200'
                            required
                        />
                    </div>
                    <textarea
                        name="message"
                        required
                        className='h-[300px] w-full rounded-[12px] focus:outline-none border text-gray-200 p-7 bg-white/5 border-[#bdbdbd]/20'
                        placeholder='Write your message'
                    >
                    </textarea>
                    <Button
                        text={"Send Message"}
                        loading={loading}
                        btnType="submit"
                        btnStyle='md:w-[200px] w-full cursor-pointer text-white bg-linear-to-t from-[#250242] to-[#62109F] p-4 md:rounded-[20px] rounded-[10px] inline-flex gap-2 items-center semibold justify-center'
                    />
                </form>
            </div>
        </section>
    )
}

export default Contact;