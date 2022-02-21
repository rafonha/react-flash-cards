export default function GenericHeader({
  pageTitle = '',
  headerCntClass = "bg-green-300 mx-auto p-4"
}) {
  return(
    <header className={headerCntClass}>
        <h1 className="text-center font-semibold text-xl">{pageTitle}</h1>
    </header>
  ) 
  ;
}
