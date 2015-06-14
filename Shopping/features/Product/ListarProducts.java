import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;

@WebServlet("/listarProdutos")
public class ListarProducts extends HttpServlet{
	private static final long serialVersionUID = 1L;
	protected void service(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
	
		ProductDao dao= new ProductDao();
		dao.beginTransaction();
		List<Product> lista = dao.find();
		dao.close();	
		
		String json = new Gson().toJson(lista);
		response.setContentType("application/json");
		response.getWriter().write(json);	
		}
}
