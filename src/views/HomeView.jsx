import TileGrid from "../components/misc/TileGrid"
import ImageTile from "../components/tile/ImageTile"

import tkPic from "../assets/tk_1.jpg"
import TextTile from "../components/tile/TextTile"
import SubTile from "../components/tile/SubTile"
import ButtonTile from "../components/tile/ButtonTile"

import { Bookmark, Briefcase, Feather, Film, GitHub, Linkedin, Mail, Send, Truck } from "react-feather"

const text = `
    I am a full stack software developer based out of New York, NY.
    My strengths lay in building scalable platforms and websites for businesses of all shapes and sizes.
    I pride myself in the security and reliability of the custom software I produce.
    With over three years of field experience, I have gained the knowledge to produce software that will
    not only assist companies to grow but will surpass expectations.
`

export default () => {
    return(
        <TileGrid className="m-auto">
            <ImageTile width="col-span-1" src={tkPic} alt="Headshot photo of Thomas" square />
            <TextTile
                width="col-span-1 sm:col-span-2"
                header="Thomas Kirrane"
                text="Fullstack Software Engineer"
                className="justify-center p-5 md:p-8 gap-3 bg-primary-700 text-white"
            />
            <TextTile
                width="col-span-1 sm:col-span-2"
                header="Hello World!"
                text={text}
                className="bg-white justify-center gap-5"
            />
            <SubTile>
                <ButtonTile className="bg-slate-800" location="https://github.com/txkirrane" icon={<GitHub />} />
                <ButtonTile className="bg-blue-600" location="https://www.linkedin.com/in/tkirrane/" label="LinkedIn" icon={<Linkedin />} />
                <ButtonTile className="bg-lime-600" location="mailto:txkirrane@txkirrane.dev" label="Email" icon={<Mail />} />
                <ButtonTile className="bg-amber-600" location="/Resume.pdf" label="Resume" icon={<Briefcase />} />
            </SubTile>
            <SubTile>
                <ButtonTile className="bg-amber-600" location="https://quintxt.com/" label="QuinTxt" icon={<Bookmark />} />
                <ButtonTile className="bg-primary-600" location="https://jody.txkirrane.dev/" label="Movie Tool" icon={<Film />} />
                <ButtonTile className="bg-primary-600" location="https://nycpops.txkirrane.dev/" label="NYC P.O.P.S." icon={<Feather />} />
                <ButtonTile className="bg-primary-600" location="https://github.com/txkirrane/unofficial_state_dept_advisory_api" label="Travel API" icon={<Send />} />
            </SubTile>
            <ImageTile
                className="col-span-1 sm:col-span-2 aspect-[2/1]"
                src="hero_nyc.jpg"
                alt="Picture of NYC street"
            />
        </TileGrid>
    )
}