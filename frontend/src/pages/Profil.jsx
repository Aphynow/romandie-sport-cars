import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useCookies } from "react-cookie";
import { useRef } from "react";

export default function Profil() {
  let { id } = useParams();
  const [cookies] = useCookies(["user"]);
  const [member, setMember] = useState(false);
  const firstName = useRef(false);
  const lastName = useRef(false);
  const email = useRef(false);

  useEffect(() => {
    if (member?.id !== id) {
      axios.get(`/member/one/${id}`).then(({ data }) => {
        setMember(data);
      });
    }
  }, [id, member?.id]);

  const editProfil = () => {
    axios
      .put("/member", {
        id: member.id,
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
      })
      .then(({ data }) => {
        setMember(data);
      });
  };

  if (!member) return <div className="waiting"></div>;

  if (cookies?.user?.id === parseInt(member.id)) {
    return (
      <div className="Profil">
        <input type="text" defaultValue={member.firstName} ref={firstName} />
        <input type="text" defaultValue={member.lastName} ref={lastName} />
        <input type="text" defaultValue={member.email} ref={email} />
        <div className="btn" onClick={editProfil}>
          Valider
        </div>
      </div>
    );
  }

  return (
    <div className="Profil">
      <h2>
        {member.firstName} {member.lastName}
      </h2>
      <p>{member.email}</p>
    </div>
  );
}
