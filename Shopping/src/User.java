
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


/**
 * TODO description
 */
@Entity
@Table(name = "usuario")
public class User{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	private long id;
	
	private String nome;
	private String sobrenome;
	private String telefone;
	private String email;
	private String senha;
	public long getId() {
		return id;
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		((User) this).nome = nome;
	}
	public String getSobrenome() {
		return sobrenome;
	}
	public void setSobrenome(String sobrenome) {
		((User) this).sobrenome = sobrenome;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		((User) this).telefone = telefone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		((User) this).email = email;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		((User) this).senha = senha;
	}	
}