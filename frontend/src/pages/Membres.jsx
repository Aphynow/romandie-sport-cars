import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Membres() {
  const [members, setMembers] = useState(false);

  useEffect(() => {
    if (!members) {
      axios.get("/member/all").then(({ data }) => {
        setMembers(data);
      });
    }
  }, [members]);

  return (
    <div id="Members">
      <section>
        {members &&
          members.map((member) => {
            return (
              <div className="member" key={member.id}>
                <div>{member.id}</div>
                <div>{member.firstName}</div>
                <div>{member.lastName}</div>
                <div>{member.email}</div>
                <div>{member.birthday}</div>
                <div>
                  <Link to={`/profil/${member.id}`}>lien</Link>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
}
