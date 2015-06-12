
import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/cadastrarProduto")
public class ProductController  extends HttpServlet{

	private static final long serialVersionUID = 1L;
	protected void service(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		
		System.out.println(request.getParameter("estado"));
		
		Product produto= new Product();
		produto.setEstadoDoProduto(request.getParameter("estado"));
		produto.setDescricao(request.getParameter("descricao"));
		produto.setFoto(request.getParameter("foto"));
		produto.setPreco(request.getParameter("preco"));
		produto.setTipo(request.getParameter("tipo"));
		produto.setTitulo(request.getParameter("titulo"));
		
		ProductDao dao= new ProductDao();
		dao.beginTransaction();
		dao.save(produto);
		dao.close();		
	}
	
}
