import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
import { AiOutlineRobot } from 'react-icons/ai'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { PiChalkboardTeacher } from 'react-icons/pi'
import { AiOutlineEdit } from "react-icons/ai";
import { GiTreeBranch } from 'react-icons/gi'

// icons
import { BiLeaf } from 'react-icons/bi'

const HoverDevCards = () => {
    return (
        <div className=" my-7 py-10 container  ">

            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                <Card
                    title="Sustainable"
                    subtitle="sustainable and renewable resource"
                    href="#"
                    Icon={BiLeaf}
                />
                <Card title="Bio Degradable" subtitle="broken down naturally without harming the
              environment" href="#" Icon={GiTreeBranch} />
                <Card title="Customizable" subtitle=" offer customized designs that cater to the specific needs of your
              customers" href="#" Icon={AiOutlineEdit} />
                <Card
                    title="Consumer appeal"
                    subtitle="consumers are increasingly looking for"
                    href="#"
                    Icon={PiChalkboardTeacher}
                />
            </div>
        </div>
    );
};

const Card = ({ title, subtitle, Icon, href }) => {
    return (
        <a
            href={href}
            className="w-full p-6 rounded-2xl border border-gray-100 relative overflow-hidden group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-brown to-darkGreen translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

            <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-gray-50 group-hover:text-white/20 group-hover:rotate-12 transition-transform duration-300" />
            <Icon className="mb-4 text-3xl text-brown group-hover:text-white transition-colors relative z-10 duration-300" />
            <h3 className="font-semibold text-xl text-gray-800 group-hover:text-white relative z-10 duration-300 mb-2">
                {title}
            </h3>
            <p className="text-gray-600 group-hover:text-white/90 relative z-10 duration-300 text-sm leading-relaxed">
                {subtitle}
            </p>
        </a>
    );
};

export default HoverDevCards