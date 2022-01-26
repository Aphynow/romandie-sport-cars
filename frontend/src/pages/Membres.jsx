import axios from "axios";
import { useEffect, useState } from "react";

export default function Membres() {
  const [members, setMembers] = useState(false);

  useEffect(() => {
    if (!members) {
      axios.get("/users").then(({ data }) => {
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
              </div>
            );
          })}
      </section>
    </div>
  );
}
