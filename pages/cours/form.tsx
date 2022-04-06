import type { NextPage } from 'next'

const Form: NextPage = () => {
  return (
    <form method="post">
      <div>
        <label htmlFor="lastname">Nom</label>
        <input type="text" id="lastname" name="lastname" placeholder="Nom" />
      </div>

      <div>
        <label htmlFor="gender-male">Homme</label>
        <input type="radio" id="gender-male" name="gender" value="male" />
        <br />
        <label htmlFor="gender-female">Femme</label>
        <input type="radio" id="gender-female" name="gender" value="female" />
      </div>

      <div>
        <label htmlFor="cgu">CGU</label>
        <input type="checkbox" id="cgu" name="cgu" />
      </div>

      <div>
        <button type="submit">Envoyer</button>
      </div>
    </form>
  )
}

export default Form