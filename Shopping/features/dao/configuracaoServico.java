import java.io.IOException;
import java.io.BufferedReader;
import java.io.FileReader;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

@WebServlet("/configuracao")
public class configuracaoServico extends HttpServlet {
	@Override
	protected void service(HttpServletRequest resquest, HttpServletResponse response)
			throws ServletException, IOException {
		
		String json="{Shop,User,Seller,Sell,ProductCadastre,Service,Product,dao}";
		response.setContentType("application/json");
		response.getWriter().write(json);	
	}

}
