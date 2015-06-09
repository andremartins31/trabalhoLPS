
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/cadastrarUser")
public class UserController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void service(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		
		System.out.println(request.getParameter("name"));
		
		User user = new User();
		user.setNome(request.getParameter("name"));
		user.setEmail(request.getParameter("email"));
		UsuarioDAO dao= new UsuarioDAO();
		dao.beginTransaction();
		dao.save(user);
		dao.close();

	}
}