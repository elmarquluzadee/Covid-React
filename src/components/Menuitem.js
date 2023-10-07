import PropTypes from 'prop-types'

const Menuitem = ({title,active,onClick}) => {
  return (
   <li>
      <a onClick={() => {onClick(title)}}
       className={`block cursor-pointer border-0 py-2 pr-4 pl-3 ${active?"text-blue-700" : "text-gray-700"} hover:text-blue-700`}>
       {title}
      </a>
   </li>
  )
}
Menuitem.propTypes = {
    title:PropTypes.string,
    active:PropTypes.bool,
    onClick:PropTypes.func
}
  
Menuitem.defaultProps = {
      title: 'Corona App',
      active: false,
      onClick:() => null
}

export default Menuitem
