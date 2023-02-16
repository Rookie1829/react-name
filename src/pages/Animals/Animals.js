import "./styles.css"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
export default function Animals() {
    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                rel="stylesheet"
            />
            <div className="cards">
                <div className="card">
                    <h2 className="card-title">Seal</h2>
                    <img
                        src="https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                        alt=""
                    />
                    <p className="card-desc">
                        Pinnipeds, commonly known as seals,[a] are a widely distributed and
                        diverse clade of carnivorous, fin-footed, semiaquatic marine mammals.
                        They comprise the extant families Odobenidae (whose only living member
                        is the walrus), Otariidae (the eared seals: sea lions and fur seals),
                        and Phocidae (the earless seals, or true seals).
                    </p>
                </div>
                <div className="card">
                    <h2 className="card-title">Lion</h2>
                    <img
                        src="https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        alt=""
                    />
                    <p className="card-desc">
                        The lion (Panthera leo) is a species in the family Felidae and a member
                        of the genus Panthera. It has a muscular, deep-chested body, short,
                        rounded head, round ears, and a hairy tuft at the end of its tail. It is
                        sexually dimorphic; adult male lions have a prominent mane.
                    </p>
                </div>
                <div className="card">
                    <h2 className="card-title">Hawk</h2>
                    <img
                        src="https://images.unsplash.com/photo-1534251369789-5067c8b8602a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        alt=""
                    />
                    <p className="card-desc">
                        Hawks are a group of medium-sized diurnal birds of prey of the family
                        Accipitridae. Hawks are widely distributed and vary greatly in size. The
                        subfamily Accipitrinae includes goshawks, sparrowhawks, sharp-shinned
                        hawks and others. This subfamily are mainly woodland birds with long
                        tails and high visual acuity. They hunt by dashing suddenly from a
                        concealed perch.
                    </p>
                </div>
            </div>
        </>

    );
}