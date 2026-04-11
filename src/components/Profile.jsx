import { FaGithub, FaLinkedin } from "react-icons/fa"
import { profile } from "../data"
import { MdEmail } from "react-icons/md"

const Profile = () => {
  return (
    <div className="py-16">
        
        {/* card */}
        <div className="flex flex-col gap-1 items-center px-4 py-3 border rounded-md">
    
    {/* avatar + name */}
          <div className="flex justify-between gap-2 items-center w-full">
              {/* avatar */}
          <div className="bg-slate-300 h-20 w-20 rounded-full">
            <div className="h-full w-full"></div>
          </div>

          {/* info */}
          <div className="flex-1 p-1 flex">
            <div>
              <h1 className="text-2xl text-slate-900 font-semibold">{profile.name}</h1>
              <p className="text-slate-700 mb-2">{profile.title}</p>
            </div>
          </div>
          </div>
          
      {/* bio and links */}
        <div className="flex flex-col w-full">

            <div>
              <p>{profile.tagline}</p>
            </div>


            {/* socials */}
            <div className="flex gap-2 items-center text-xl mt-2">
              <a href={profile.linkedIn} className="text-slate-400 hover:text-slate-900 transition-all duration-200" ><FaLinkedin /></a>
              <a href={profile.github} className="text-slate-400 hover:text-slate-900 transition-all duration-200"><FaGithub /></a>
              <a href={profile.email} className="text-slate-400 hover:text-slate-900 transition-all duration-200"><MdEmail /></a>
            </div>
        </div>
          
        </div>


    </div>
  )
}

export default Profile