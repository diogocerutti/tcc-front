import { getServerSession } from "next-auth";

export default async function Authenticator() {
  const session = await getServerSession();
  //console.log(session);
  return (
    <>
      <p>Isso aparece para logado e não logado</p>
      {session && (
        <p>Isso aparece somente para logados! Bem-Vindo {session.user?.name}</p>
      )}
    </>
  );
}
