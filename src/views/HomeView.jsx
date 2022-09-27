import TileGrid from "../components/misc/TileGrid"
import ImageTile from "../components/tile/ImageTile"

import tkPic from "../assets/tk_1.jpg"
import TextTile from "../components/tile/TextTile"
import SubTile from "../components/tile/SubTile"
import ButtonTile from "../components/tile/ButtonTile"

import { GitHub, Linkedin, Code, Mail } from "react-feather"

const text = `
    I am a full stack software developer based out of Salt Lake City, UT.
    My strengths lay in building scalable platforms and websites for businesses of all shapes and sizes.
    I pride myself in the security and reliability of the custom software I produce.
    With over three years of field experience, I have gained the knowledge to produce software that will
    not only assist companies to grow but will surpass expectations.
`

export default () => {
    return(
        <TileGrid>
            <ImageTile width="col-span-1" src={tkPic} square />
            <TextTile
                width="col-span-1 sm:col-span-2"
                header="Thomas Kirrane"
                text="Freelance Software Developer"
                className="justify-center p-5 md:p-8 gap-3 bg-teal-700 text-white"
            />
            <TextTile
                width="col-span-1 sm:col-span-2"
                header="Hello World!"
                text={text}
                className="bg-white"
            />
            <SubTile>
                <ButtonTile className="bg-slate-800" location="https://github.com/txkirrane" icon={<GitHub />} />
                <ButtonTile className="bg-blue-600" location="https://www.linkedin.com/in/tkirrane/" label="LinkedIn" icon={<Linkedin />} />
                <ButtonTile className="bg-lime-600" location="mailto:txkirrane@txkirrane.dev" label="E-Mail" icon={<Mail />} />
                <ButtonTile className="bg-amber-600" location="https://quintxt.com/" label="QuinTxt" />
            </SubTile>
            <SubTile>
                <TextTile header="Projects" className="bg-teal-600 text-white justify-end" />
                <ButtonTile className="bg-teal-600" location="https://jody.txkirrane.dev/" label="Movie Tool" />
                <ButtonTile className="bg-teal-600" location="https://vinny.txkirrane.dev/" label="VIN Tool" />
                <ButtonTile className="bg-teal-600" location="https://github.com/txkirrane/unofficial_state_dept_advisory_api" label="Travel API" />
            </SubTile>
            <ImageTile
                className="col-span-1 sm:col-span-2"
                src="https://www.visittheusa.com/sites/default/files/styles/16_9_1280x720/public/images/hero_media_image/2019-08/bccf39bccd209677c073fa48f32b9406.jpeg?h=123294e0&itok=fhUxUMFa"
            />
        </TileGrid>
    )
}