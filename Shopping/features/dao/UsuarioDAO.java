public class UsuarioDAO extends GenericJPADAO<User> {
	 public UsuarioDAO() {
		this.persistentClass=User.class;
	}
}
