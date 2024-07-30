import { ABOUT_TEXT,SKILLS } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">
            About
            <span className="text-neutral-500"> Me</span>
        </h2>
        <div className="flex flex-wrap">
            {/*Skills Table*/}
            <motion.div
            whileInView={{opacity:1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <table className="min-w-full divide-y divide-neutral-400 border border-neutral-400">
                        <thead className="bg-white border-b border-neutral-400">
                            <tr>
                                <th className="py-2 px-4 font-semibold text-neutral-900 border-r border-neutral-500">Skill Area</th>
                                <th className="py-2 px-4 font-semibold text-neutral-900 border-r border-neutral-500">Technology</th>
                                <th className="py-2 px-4 font-semibold text-neutral-900">Proficiency</th>
                            </tr>
                        </thead>
                        <tbody className="bg-neutral-700 divide-y divide-neutral-500">
                            {SKILLS.map((skill,index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border-r border-neutral-500">{skill.skillArea}</td>
                                    <td className="py-2 px-4 border-r border-neutral-500">{skill.technologies}</td>
                                    <td className="py-2 px-4">{skill.proficiency}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
            <motion.div
            whileInView={{opacity:1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-7 max-w-xl py-6">{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About