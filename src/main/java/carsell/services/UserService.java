package carsell.services;

import carsell.exceptions.user.UserFoundException;
import carsell.exceptions.user.IncorrectUserParamsException;

import carsell.exceptions.NotFoundException;
import carsell.models.Account;
import carsell.models.User;
import carsell.repo.UserRepository;
import com.sun.org.apache.xpath.internal.operations.Bool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final AccountService accountService;

    @Transactional
    public User addUser(User user) {
        if (user.getPassword().equals("") || user.getUsername().equals("")) {
            throw new IncorrectUserParamsException();
        }
        this.userIsExist(user.getUsername());
        user.setAccount(accountService.createAccount(user));
        return this.userRepository.save(user);
    }

    public User getUser (Long userId) {
        Optional<User> user = this.userRepository.findById(userId);
        if (user.isPresent()) {
            return user.get();
        } else {
            throw new NotFoundException(userId, "User");
        }
    }

    public Boolean compareUsers (Long userId1, Long userId2) {
        User user1 = getUser(userId1);
        User user2 = getUser(userId2);
        return user1.getUsername().equals(user2.getUsername());
    }

    public User login(User input) {
        Optional<User> user = this.userRepository.findByUsername(input.getUsername());
        if (user.isPresent()) {
            User userObj =  user.get();
            if (userObj.getUsername().equals(input.getUsername()) && userObj.getPassword().equals(input.getPassword())) {
                return userObj;
            } else {
                throw new IncorrectUserParamsException();
            }
        } else {
            throw new IncorrectUserParamsException();
        }
    }

    private void userIsExist(String username) {
        Optional<User> user = this.userRepository.findByUsername(username);
        if (user.isPresent()) {
            throw new UserFoundException(username);
        }
    }

    @Autowired
    public UserService(UserRepository userRepository, AccountService accountService) {
        this.userRepository = userRepository;
        this.accountService = accountService;
    }
}
