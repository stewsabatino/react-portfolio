export default function Home() {
    return (
        <div className="container justify-content-center">
            <h1 className="text-dark text-center">About Me </h1>
            <p className="text-dark fw-bold">I am a former Plant Manager / Mining Engineer turned full-stack software developer. I enjoy computer programming and problem solving which drove me to get my certificate of full-stack web development from Northwestern University. I recently got married in May after having to postpone my wedding 6 months due to COVID. After getting married we recently got a puppy named Gus, a Sheepadoodle.
            </p>

            <div className="row justify-content-evenly">
                <div className="col-4">
                    <h3 className="text-dark"> Project Management </h3>
                    <p className="text-dark fw-bold">
                        Managed capital project with $2M budget and a team of 12 to have a more efficient operation and optimized product while meeting deadlines and project goals. Collaborated with a team of 17 on a $70M underground mine project. Managed communication across departments to schedule and plan project goals.
                    </p>
                </div>

                <div className="col-4">

                    <h3 className="text-dark"> Management </h3>
                    <p className="text-dark fw-bold">
                        Managed successful teams of up to 25 employees. Lead safety initiatives and advanced safety culture. Implemented new production methods which led to increased profits of 25%.
                    </p>
                </div>
            </div>
        </div>
    )
}