import { Suspense } from "react";
import Repo from "../../../components/Repo";
import RepoDirs from "../../../components/RepoDirs";
import Link
 from "next/link";
const RepoPage =  ({ params: {name} }) => {
    return (
        <div className="card">
            <Link href='/code/repos' className="btn btn-back">
                Back to repositories
            </Link>
            <Suspense fallback={<div>Loading Repos</div>}>
                <Repo name={name} />
            </Suspense>

            <Suspense fallback={<div>Loading directories</div>}>
                <RepoDirs name={name}/>
            </Suspense>
        </div>
    )
  }
  
export default RepoPage