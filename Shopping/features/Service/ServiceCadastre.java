import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/cadastrarServico")
public class ServiceCadastre extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void service(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		Service service = new Service();
		service.setLocalizacao(request.getParameter("localizacao"));
		service.setAreaAtuacao(request.getParameter("area"));
		service.setDadosDeContato(request.getParameter("contato"));
		service.setDescricao(request.getParameter("descricao"));
		service.setFoto(request.getParameter("foto"));
		service.setPreco(request.getParameter("preco"));
		service.setTipo(request.getParameter("tipo"));
		service.setTitulo(request.getParameter("titulo"));

		ServiceDao dao = new ServiceDao();
		dao.beginTransaction();
		dao.save(service);
		dao.close();
	}

}
