
public class ProductDao extends GenericJPADAO<Product>{
	public ProductDao(){
		this.persistentClass =Product.class;
	}

}
