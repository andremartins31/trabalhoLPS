import java.io.IOException;
import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

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
		
		String json="Shop,User,Seller,Sell,ProductCadastre,Service,Product,dao";
		List<String> s = new ArrayList<String>();
		s.add("Shop");
		s.add("User");
		s.add("Seller");
		s.add("Sell");
		s.add("ProductCadastre");
		s.add("Product");
		s.add("dao");
		
		response.setContentType("application/json");
		response.getWriter().write(new Gson().toJson(s));	
		
		
	}

}
