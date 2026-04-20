interface PageHeaderProps {
  title: string
  breadcrumbs: string[]
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="page-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>{title}</h2>
          </div>
          <div className="col-12">
            {breadcrumbs.map((crumb, i) => (
              <a key={i} href="#">{crumb}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
