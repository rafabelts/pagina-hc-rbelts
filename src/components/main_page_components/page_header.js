export default function PageHeader(){
  return(
    <div className="flex flex-row gap-10">
      <div className="flex flex-col gap-2 text-white font-bold">
        <p className="text-3xl">Rafael Alejandro Beltrán Santos</p>
        <p className="text-2xl w-[545px]">Licenciatura en ingeniería de software @ Universidad Veracruzana</p>
        <p className="text-base">Última actualización: de Noviembre de 2023</p>
      </div>
      <img className="w-[190px]" src="https://www.peanuts.com/sites/default/files/sn-color.jpg"/>
    </div>
  );
}
